
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-14 20:00:00", "b": 694.5}, {"a": "2024-11-14 20:05:00", "b": 683.0}, {"a": "2024-11-14 20:10:00", "b": 679.6}, {"a": "2024-11-14 20:15:00", "b": 680.75}, {"a": "2024-11-14 20:20:00", "b": 685.0}, {"a": "2024-11-14 20:25:00", "b": 696.8}, {"a": "2024-11-14 20:30:00", "b": 711.6}, {"a": "2024-11-14 20:35:00", "b": 682.8}, {"a": "2024-11-14 20:40:00", "b": 668.2}, {"a": "2024-11-14 20:45:00", "b": 673.2}, {"a": "2024-11-14 20:50:00", "b": 672.6}, {"a": "2024-11-14 20:55:00", "b": 650.0}, {"a": "2024-11-14 21:00:00", "b": 640.4}, {"a": "2024-11-14 21:05:00", "b": 639.4}, {"a": "2024-11-14 21:10:00", "b": 656.8}, {"a": "2024-11-14 21:15:00", "b": 640.4}, {"a": "2024-11-14 21:20:00", "b": 624.8}, {"a": "2024-11-14 21:25:00", "b": 640.2}, {"a": "2024-11-14 21:30:00", "b": 637.5}, {"a": "2024-11-14 21:35:00", "b": 641.0}, {"a": "2024-11-14 21:40:00", "b": 654.5}, {"a": "2024-11-14 21:45:00", "b": 639.8}, {"a": "2024-11-14 21:50:00", "b": 635.0}, {"a": "2024-11-14 21:55:00", "b": 648.75}, {"a": "2024-11-14 22:00:00", "b": 641.0}, {"a": "2024-11-14 22:05:00", "b": 643.25}, {"a": "2024-11-14 22:10:00", "b": 629.6666666666666}, {"a": "2024-11-14 22:15:00", "b": 628.2}, {"a": "2024-11-14 22:20:00", "b": 635.4}, {"a": "2024-11-14 22:25:00", "b": 641.0}, {"a": "2024-11-14 22:30:00", "b": 634.4}, {"a": "2024-11-14 22:35:00", "b": 623.0}, {"a": "2024-11-14 22:40:00", "b": 628.4}, {"a": "2024-11-14 22:45:00", "b": 613.8}, {"a": "2024-11-14 22:50:00", "b": 611.2}, {"a": "2024-11-14 22:55:00", "b": 596.0}, {"a": "2024-11-14 23:00:00", "b": 576.25}, {"a": "2024-11-14 23:05:00", "b": 562.4}, {"a": "2024-11-14 23:10:00", "b": 554.2}, {"a": "2024-11-14 23:15:00", "b": 573.8}, {"a": "2024-11-14 23:20:00", "b": 577.6}, {"a": "2024-11-14 23:25:00", "b": 558.0}, {"a": "2024-11-14 23:30:00", "b": 548.8}, {"a": "2024-11-14 23:35:00", "b": 564.6}, {"a": "2024-11-14 23:40:00", "b": 575.0}, {"a": "2024-11-14 23:45:00", "b": 563.0}, {"a": "2024-11-14 23:50:00", "b": 553.6666666666666}, {"a": "2024-11-14 23:55:00", "b": 555.0}, {"a": "2024-11-15 00:00:00", "b": 552.25}, {"a": "2024-11-15 00:05:00", "b": 544.3333333333334}, {"a": "2024-11-15 00:10:00", "b": 551.0}, {"a": "2024-11-15 00:15:00", "b": 549.8}, {"a": "2024-11-15 00:20:00", "b": 534.4}, {"a": "2024-11-15 00:25:00", "b": 535.6}, {"a": "2024-11-15 00:30:00", "b": 513.2}, {"a": "2024-11-15 00:35:00", "b": 523.8}, {"a": "2024-11-15 00:40:00", "b": 544.5}, {"a": "2024-11-15 00:45:00", "b": 530.0}, {"a": "2024-11-15 00:50:00", "b": 530.2}, {"a": "2024-11-15 00:55:00", "b": 517.0}, {"a": "2024-11-15 01:00:00", "b": 502.2}, {"a": "2024-11-15 01:05:00", "b": 510.2}, {"a": "2024-11-15 01:10:00", "b": 511.6}, {"a": "2024-11-15 01:15:00", "b": 508.0}, {"a": "2024-11-15 01:20:00", "b": 504.2}, {"a": "2024-11-15 01:25:00", "b": 493.0}, {"a": "2024-11-15 01:30:00", "b": 508.0}, {"a": "2024-11-15 01:35:00", "b": 506.6}, {"a": "2024-11-15 01:40:00", "b": 485.25}, {"a": "2024-11-15 01:45:00", "b": 491.6666666666667}, {"a": "2024-11-15 01:50:00", "b": 500.4}, {"a": "2024-11-15 01:55:00", "b": 497.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    