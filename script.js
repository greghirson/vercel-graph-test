
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-10 19:00:00", "b": 610.0}, {"a": "2024-11-10 19:05:00", "b": 621.0}, {"a": "2024-11-10 19:10:00", "b": 641.8}, {"a": "2024-11-10 19:15:00", "b": 649.8}, {"a": "2024-11-10 19:20:00", "b": 652.25}, {"a": "2024-11-10 19:25:00", "b": 664.0}, {"a": "2024-11-10 19:30:00", "b": 669.6}, {"a": "2024-11-10 19:35:00", "b": 668.4}, {"a": "2024-11-10 19:40:00", "b": 666.25}, {"a": "2024-11-10 19:45:00", "b": 661.6}, {"a": "2024-11-10 19:50:00", "b": 673.0}, {"a": "2024-11-10 19:55:00", "b": 682.4}, {"a": "2024-11-10 20:00:00", "b": 688.75}, {"a": "2024-11-10 20:05:00", "b": 678.2}, {"a": "2024-11-10 20:10:00", "b": 682.2}, {"a": "2024-11-10 20:15:00", "b": 671.0}, {"a": "2024-11-10 20:20:00", "b": 659.4}, {"a": "2024-11-10 20:25:00", "b": 674.2}, {"a": "2024-11-10 20:30:00", "b": 673.75}, {"a": "2024-11-10 20:35:00", "b": 660.8}, {"a": "2024-11-10 20:40:00", "b": 673.75}, {"a": "2024-11-10 20:45:00", "b": 673.6}, {"a": "2024-11-10 20:50:00", "b": 681.6}, {"a": "2024-11-10 20:55:00", "b": 692.3333333333334}, {"a": "2024-11-10 21:00:00", "b": 688.4}, {"a": "2024-11-10 21:05:00", "b": 684.6}, {"a": "2024-11-10 21:10:00", "b": 687.6}, {"a": "2024-11-10 21:15:00", "b": 694.0}, {"a": "2024-11-10 21:20:00", "b": 695.4}, {"a": "2024-11-10 21:25:00", "b": 699.25}, {"a": "2024-11-10 21:30:00", "b": 707.3333333333334}, {"a": "2024-11-10 21:35:00", "b": 702.4}, {"a": "2024-11-10 21:40:00", "b": 723.6}, {"a": "2024-11-10 21:45:00", "b": 724.3333333333334}, {"a": "2024-11-10 21:50:00", "b": 723.4}, {"a": "2024-11-10 21:55:00", "b": 728.3333333333334}, {"a": "2024-11-10 22:00:00", "b": 715.8}, {"a": "2024-11-10 22:05:00", "b": 715.2}, {"a": "2024-11-10 22:10:00", "b": 736.5}, {"a": "2024-11-10 22:15:00", "b": 726.0}, {"a": "2024-11-10 22:20:00", "b": 723.8}, {"a": "2024-11-10 22:25:00", "b": 735.5}, {"a": "2024-11-10 22:30:00", "b": 721.0}, {"a": "2024-11-10 22:35:00", "b": 703.0}, {"a": "2024-11-10 22:40:00", "b": 701.25}, {"a": "2024-11-10 22:45:00", "b": 692.6}, {"a": "2024-11-10 22:50:00", "b": 684.2}, {"a": "2024-11-10 22:55:00", "b": 680.5}, {"a": "2024-11-10 23:00:00", "b": 672.75}, {"a": "2024-11-10 23:05:00", "b": 668.2}, {"a": "2024-11-10 23:10:00", "b": 659.6}, {"a": "2024-11-10 23:15:00", "b": 645.6}, {"a": "2024-11-10 23:20:00", "b": 625.8}, {"a": "2024-11-10 23:25:00", "b": 624.4}, {"a": "2024-11-10 23:30:00", "b": 628.75}, {"a": "2024-11-10 23:35:00", "b": 611.5}, {"a": "2024-11-10 23:40:00", "b": 596.25}, {"a": "2024-11-10 23:45:00", "b": 594.2}, {"a": "2024-11-10 23:50:00", "b": 604.0}, {"a": "2024-11-10 23:55:00", "b": 582.6}, {"a": "2024-11-11 00:00:00", "b": 567.5}, {"a": "2024-11-11 00:05:00", "b": 576.0}, {"a": "2024-11-11 00:10:00", "b": 580.5}, {"a": "2024-11-11 00:15:00", "b": 572.0}, {"a": "2024-11-11 00:20:00", "b": 558.0}, {"a": "2024-11-11 00:25:00", "b": 554.5}, {"a": "2024-11-11 00:30:00", "b": 544.75}, {"a": "2024-11-11 00:35:00", "b": 548.6}, {"a": "2024-11-11 00:40:00", "b": 543.6666666666666}, {"a": "2024-11-11 00:45:00", "b": 537.0}, {"a": "2024-11-11 00:50:00", "b": 531.8}, {"a": "2024-11-11 00:55:00", "b": 524.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    