
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-05 09:00:00", "b": 663.75}, {"a": "2024-12-05 09:05:00", "b": 641.0}, {"a": "2024-12-05 09:10:00", "b": 655.4}, {"a": "2024-12-05 09:15:00", "b": 636.0}, {"a": "2024-12-05 09:20:00", "b": 641.75}, {"a": "2024-12-05 09:25:00", "b": 614.6}, {"a": "2024-12-05 09:30:00", "b": 587.75}, {"a": "2024-12-05 09:35:00", "b": 587.8}, {"a": "2024-12-05 09:40:00", "b": 568.25}, {"a": "2024-12-05 09:45:00", "b": 579.4}, {"a": "2024-12-05 09:50:00", "b": 612.8}, {"a": "2024-12-05 09:55:00", "b": 622.0}, {"a": "2024-12-05 10:00:00", "b": 627.4}, {"a": "2024-12-05 10:05:00", "b": 627.8}, {"a": "2024-12-05 10:10:00", "b": 668.8}, {"a": "2024-12-05 10:15:00", "b": 685.6}, {"a": "2024-12-05 10:20:00", "b": 679.2}, {"a": "2024-12-05 10:25:00", "b": 625.8}, {"a": "2024-12-05 10:30:00", "b": 640.2}, {"a": "2024-12-05 10:35:00", "b": 638.5}, {"a": "2024-12-05 11:05:00", "b": 592.0}, {"a": "2024-12-05 11:10:00", "b": 582.0}, {"a": "2024-12-05 11:35:00", "b": 555.0}, {"a": "2024-12-05 11:40:00", "b": 563.2}, {"a": "2024-12-05 11:45:00", "b": 558.4}, {"a": "2024-12-05 11:50:00", "b": 558.8}, {"a": "2024-12-05 11:55:00", "b": 564.0}, {"a": "2024-12-05 12:00:00", "b": 612.4}, {"a": "2024-12-05 12:05:00", "b": 615.6}, {"a": "2024-12-05 12:10:00", "b": 631.2}, {"a": "2024-12-05 12:15:00", "b": 611.2}, {"a": "2024-12-05 12:20:00", "b": 603.6}, {"a": "2024-12-05 12:25:00", "b": 594.2}, {"a": "2024-12-05 12:30:00", "b": 600.4}, {"a": "2024-12-05 12:35:00", "b": 612.2}, {"a": "2024-12-05 12:40:00", "b": 615.2}, {"a": "2024-12-05 12:45:00", "b": 622.8}, {"a": "2024-12-05 12:50:00", "b": 609.2}, {"a": "2024-12-05 12:55:00", "b": 605.2}, {"a": "2024-12-05 13:00:00", "b": 612.25}, {"a": "2024-12-05 13:05:00", "b": 604.0}, {"a": "2024-12-05 13:10:00", "b": 597.25}, {"a": "2024-12-05 13:15:00", "b": 597.0}, {"a": "2024-12-05 13:20:00", "b": 597.2}, {"a": "2024-12-05 13:25:00", "b": 586.0}, {"a": "2024-12-05 13:30:00", "b": 594.8}, {"a": "2024-12-05 13:35:00", "b": 595.25}, {"a": "2024-12-05 13:40:00", "b": 598.2}, {"a": "2024-12-05 13:45:00", "b": 606.5}, {"a": "2024-12-05 13:50:00", "b": 607.5}, {"a": "2024-12-05 13:55:00", "b": 600.6}, {"a": "2024-12-05 14:00:00", "b": 596.8}, {"a": "2024-12-05 14:05:00", "b": 608.2}, {"a": "2024-12-05 14:35:00", "b": 538.0}, {"a": "2024-12-05 14:40:00", "b": 550.2}, {"a": "2024-12-05 14:45:00", "b": 543.5}, {"a": "2024-12-05 14:50:00", "b": 548.8}, {"a": "2024-12-05 14:55:00", "b": 557.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    