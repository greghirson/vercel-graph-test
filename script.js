
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-27 05:30:00", "b": 625.75}, {"a": "2024-10-27 05:35:00", "b": 638.5}, {"a": "2024-10-27 05:40:00", "b": 626.4}, {"a": "2024-10-27 05:45:00", "b": 618.0}, {"a": "2024-10-27 05:50:00", "b": 619.6}, {"a": "2024-10-27 05:55:00", "b": 623.75}, {"a": "2024-10-27 06:00:00", "b": 614.5}, {"a": "2024-10-27 06:05:00", "b": 617.6}, {"a": "2024-10-27 06:10:00", "b": 620.25}, {"a": "2024-10-27 06:15:00", "b": 619.6}, {"a": "2024-10-27 06:20:00", "b": 620.5}, {"a": "2024-10-27 06:25:00", "b": 623.75}, {"a": "2024-10-27 06:30:00", "b": 613.0}, {"a": "2024-10-27 06:35:00", "b": 609.5}, {"a": "2024-10-27 06:40:00", "b": 611.5}, {"a": "2024-10-27 06:45:00", "b": 612.6}, {"a": "2024-10-27 06:50:00", "b": 613.0}, {"a": "2024-10-27 06:55:00", "b": 609.6666666666666}, {"a": "2024-10-27 07:00:00", "b": 596.2}, {"a": "2024-10-27 07:05:00", "b": 603.2}, {"a": "2024-10-27 07:10:00", "b": 601.8}, {"a": "2024-10-27 07:15:00", "b": 593.6666666666666}, {"a": "2024-10-27 07:20:00", "b": 593.0}, {"a": "2024-10-27 07:25:00", "b": 596.6}, {"a": "2024-10-27 07:30:00", "b": 596.25}, {"a": "2024-10-27 07:35:00", "b": 593.6}, {"a": "2024-10-27 07:40:00", "b": 585.6666666666666}, {"a": "2024-10-27 07:45:00", "b": 592.0}, {"a": "2024-10-27 07:50:00", "b": 604.4}, {"a": "2024-10-27 07:55:00", "b": 592.0}, {"a": "2024-10-27 08:00:00", "b": 590.25}, {"a": "2024-10-27 08:05:00", "b": 586.2}, {"a": "2024-10-27 08:10:00", "b": 598.75}, {"a": "2024-10-27 08:15:00", "b": 615.2}, {"a": "2024-10-27 08:20:00", "b": 627.6}, {"a": "2024-10-27 08:25:00", "b": 624.0}, {"a": "2024-10-27 08:30:00", "b": 633.2}, {"a": "2024-10-27 08:35:00", "b": 633.75}, {"a": "2024-10-27 08:40:00", "b": 627.4}, {"a": "2024-10-27 08:45:00", "b": 632.75}, {"a": "2024-10-27 08:50:00", "b": 633.0}, {"a": "2024-10-27 08:55:00", "b": 634.4}, {"a": "2024-10-27 09:00:00", "b": 618.75}, {"a": "2024-10-27 09:05:00", "b": 618.6}, {"a": "2024-10-27 09:10:00", "b": 627.6}, {"a": "2024-10-27 09:15:00", "b": 641.5}, {"a": "2024-10-27 09:20:00", "b": 641.6}, {"a": "2024-10-27 09:25:00", "b": 630.5}, {"a": "2024-10-27 09:30:00", "b": 633.0}, {"a": "2024-10-27 09:35:00", "b": 644.0}, {"a": "2024-10-27 09:40:00", "b": 638.6}, {"a": "2024-10-27 09:45:00", "b": 627.25}, {"a": "2024-10-27 09:50:00", "b": 633.3333333333334}, {"a": "2024-10-27 09:55:00", "b": 630.5}, {"a": "2024-10-27 10:00:00", "b": 629.75}, {"a": "2024-10-27 10:05:00", "b": 626.8}, {"a": "2024-10-27 10:10:00", "b": 624.4}, {"a": "2024-10-27 10:15:00", "b": 621.0}, {"a": "2024-10-27 10:20:00", "b": 615.6}, {"a": "2024-10-27 10:25:00", "b": 629.0}, {"a": "2024-10-27 10:30:00", "b": 619.0}, {"a": "2024-10-27 10:35:00", "b": 622.5}, {"a": "2024-10-27 10:40:00", "b": 613.6}, {"a": "2024-10-27 10:45:00", "b": 614.6}, {"a": "2024-10-27 10:50:00", "b": 597.6}, {"a": "2024-10-27 10:55:00", "b": 597.4}, {"a": "2024-10-27 11:00:00", "b": 626.8}, {"a": "2024-10-27 11:05:00", "b": 662.2}, {"a": "2024-10-27 11:10:00", "b": 669.2}, {"a": "2024-10-27 11:15:00", "b": 655.6}, {"a": "2024-10-27 11:20:00", "b": 672.2}, {"a": "2024-10-27 11:25:00", "b": 680.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    