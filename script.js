
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-27 02:40:00", "b": 673.5}, {"a": "2024-10-27 02:45:00", "b": 672.25}, {"a": "2024-10-27 02:50:00", "b": 676.2}, {"a": "2024-10-27 02:55:00", "b": 673.2}, {"a": "2024-10-27 03:00:00", "b": 644.0}, {"a": "2024-10-27 03:05:00", "b": 669.4}, {"a": "2024-10-27 03:10:00", "b": 664.0}, {"a": "2024-10-27 03:15:00", "b": 660.25}, {"a": "2024-10-27 03:20:00", "b": 661.6}, {"a": "2024-10-27 03:25:00", "b": 650.5}, {"a": "2024-10-27 03:30:00", "b": 652.2}, {"a": "2024-10-27 03:35:00", "b": 647.25}, {"a": "2024-10-27 03:40:00", "b": 645.0}, {"a": "2024-10-27 03:45:00", "b": 646.75}, {"a": "2024-10-27 03:50:00", "b": 644.6666666666666}, {"a": "2024-10-27 03:55:00", "b": 646.25}, {"a": "2024-10-27 04:00:00", "b": 647.25}, {"a": "2024-10-27 04:05:00", "b": 644.6666666666666}, {"a": "2024-10-27 04:10:00", "b": 642.0}, {"a": "2024-10-27 04:15:00", "b": 641.0}, {"a": "2024-10-27 04:20:00", "b": 646.5}, {"a": "2024-10-27 04:25:00", "b": 638.4}, {"a": "2024-10-27 04:30:00", "b": 645.25}, {"a": "2024-10-27 04:35:00", "b": 645.6}, {"a": "2024-10-27 04:40:00", "b": 634.4}, {"a": "2024-10-27 04:45:00", "b": 631.0}, {"a": "2024-10-27 04:50:00", "b": 636.75}, {"a": "2024-10-27 04:55:00", "b": 625.4}, {"a": "2024-10-27 05:00:00", "b": 628.5}, {"a": "2024-10-27 05:05:00", "b": 633.5}, {"a": "2024-10-27 05:10:00", "b": 627.25}, {"a": "2024-10-27 05:15:00", "b": 619.5}, {"a": "2024-10-27 05:20:00", "b": 619.2}, {"a": "2024-10-27 05:25:00", "b": 629.2}, {"a": "2024-10-27 05:30:00", "b": 625.75}, {"a": "2024-10-27 05:35:00", "b": 638.5}, {"a": "2024-10-27 05:40:00", "b": 626.4}, {"a": "2024-10-27 05:45:00", "b": 618.0}, {"a": "2024-10-27 05:50:00", "b": 619.6}, {"a": "2024-10-27 05:55:00", "b": 623.75}, {"a": "2024-10-27 06:00:00", "b": 614.5}, {"a": "2024-10-27 06:05:00", "b": 617.6}, {"a": "2024-10-27 06:10:00", "b": 620.25}, {"a": "2024-10-27 06:15:00", "b": 619.6}, {"a": "2024-10-27 06:20:00", "b": 620.5}, {"a": "2024-10-27 06:25:00", "b": 623.75}, {"a": "2024-10-27 06:30:00", "b": 613.0}, {"a": "2024-10-27 06:35:00", "b": 609.5}, {"a": "2024-10-27 06:40:00", "b": 611.5}, {"a": "2024-10-27 06:45:00", "b": 612.6}, {"a": "2024-10-27 06:50:00", "b": 613.0}, {"a": "2024-10-27 06:55:00", "b": 609.6666666666666}, {"a": "2024-10-27 07:00:00", "b": 596.2}, {"a": "2024-10-27 07:05:00", "b": 603.2}, {"a": "2024-10-27 07:10:00", "b": 601.8}, {"a": "2024-10-27 07:15:00", "b": 593.6666666666666}, {"a": "2024-10-27 07:20:00", "b": 593.0}, {"a": "2024-10-27 07:25:00", "b": 596.6}, {"a": "2024-10-27 07:30:00", "b": 596.25}, {"a": "2024-10-27 07:35:00", "b": 593.6}, {"a": "2024-10-27 07:40:00", "b": 585.6666666666666}, {"a": "2024-10-27 07:45:00", "b": 592.0}, {"a": "2024-10-27 07:50:00", "b": 604.4}, {"a": "2024-10-27 07:55:00", "b": 592.0}, {"a": "2024-10-27 08:00:00", "b": 590.25}, {"a": "2024-10-27 08:05:00", "b": 586.2}, {"a": "2024-10-27 08:10:00", "b": 598.75}, {"a": "2024-10-27 08:15:00", "b": 615.2}, {"a": "2024-10-27 08:20:00", "b": 627.6}, {"a": "2024-10-27 08:25:00", "b": 624.0}, {"a": "2024-10-27 08:30:00", "b": 633.2}, {"a": "2024-10-27 08:35:00", "b": 633.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    