
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-05 06:00:00", "b": 541.0}, {"a": "2024-12-05 06:05:00", "b": 545.2}, {"a": "2024-12-05 06:10:00", "b": 538.2}, {"a": "2024-12-05 06:15:00", "b": 543.75}, {"a": "2024-12-05 06:20:00", "b": 539.0}, {"a": "2024-12-05 06:25:00", "b": 539.4}, {"a": "2024-12-05 06:30:00", "b": 534.8}, {"a": "2024-12-05 06:35:00", "b": 529.6}, {"a": "2024-12-05 06:40:00", "b": 527.5}, {"a": "2024-12-05 06:45:00", "b": 524.2}, {"a": "2024-12-05 06:50:00", "b": 530.75}, {"a": "2024-12-05 06:55:00", "b": 539.25}, {"a": "2024-12-05 07:00:00", "b": 543.25}, {"a": "2024-12-05 07:05:00", "b": 543.2}, {"a": "2024-12-05 07:10:00", "b": 542.6}, {"a": "2024-12-05 07:15:00", "b": 534.25}, {"a": "2024-12-05 07:20:00", "b": 544.0}, {"a": "2024-12-05 07:25:00", "b": 541.0}, {"a": "2024-12-05 07:30:00", "b": 527.8}, {"a": "2024-12-05 07:35:00", "b": 513.0}, {"a": "2024-12-05 07:40:00", "b": 512.75}, {"a": "2024-12-05 07:45:00", "b": 519.6}, {"a": "2024-12-05 07:50:00", "b": 558.0}, {"a": "2024-12-05 07:55:00", "b": 575.4}, {"a": "2024-12-05 08:00:00", "b": 620.6}, {"a": "2024-12-05 08:05:00", "b": 664.6}, {"a": "2024-12-05 08:10:00", "b": 663.0}, {"a": "2024-12-05 08:15:00", "b": 648.0}, {"a": "2024-12-05 08:20:00", "b": 631.2}, {"a": "2024-12-05 08:25:00", "b": 620.6666666666666}, {"a": "2024-12-05 08:30:00", "b": 640.8}, {"a": "2024-12-05 08:35:00", "b": 647.6666666666666}, {"a": "2024-12-05 08:40:00", "b": 636.8}, {"a": "2024-12-05 08:45:00", "b": 630.5}, {"a": "2024-12-05 08:50:00", "b": 648.2}, {"a": "2024-12-05 08:55:00", "b": 658.4}, {"a": "2024-12-05 09:00:00", "b": 663.75}, {"a": "2024-12-05 09:05:00", "b": 641.0}, {"a": "2024-12-05 09:10:00", "b": 655.4}, {"a": "2024-12-05 09:15:00", "b": 636.0}, {"a": "2024-12-05 09:20:00", "b": 641.75}, {"a": "2024-12-05 09:25:00", "b": 614.6}, {"a": "2024-12-05 09:30:00", "b": 587.75}, {"a": "2024-12-05 09:35:00", "b": 587.8}, {"a": "2024-12-05 09:40:00", "b": 568.25}, {"a": "2024-12-05 09:45:00", "b": 579.4}, {"a": "2024-12-05 09:50:00", "b": 612.8}, {"a": "2024-12-05 09:55:00", "b": 622.0}, {"a": "2024-12-05 10:00:00", "b": 627.4}, {"a": "2024-12-05 10:05:00", "b": 627.8}, {"a": "2024-12-05 10:10:00", "b": 668.8}, {"a": "2024-12-05 10:15:00", "b": 685.6}, {"a": "2024-12-05 10:20:00", "b": 679.2}, {"a": "2024-12-05 10:25:00", "b": 625.8}, {"a": "2024-12-05 10:30:00", "b": 640.2}, {"a": "2024-12-05 10:35:00", "b": 638.5}, {"a": "2024-12-05 11:05:00", "b": 592.0}, {"a": "2024-12-05 11:10:00", "b": 582.0}, {"a": "2024-12-05 11:35:00", "b": 555.0}, {"a": "2024-12-05 11:40:00", "b": 563.2}, {"a": "2024-12-05 11:45:00", "b": 558.4}, {"a": "2024-12-05 11:50:00", "b": 558.8}, {"a": "2024-12-05 11:55:00", "b": 564.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    