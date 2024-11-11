
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-10 17:00:00", "b": 535.0}, {"a": "2024-11-10 17:05:00", "b": 530.0}, {"a": "2024-11-10 17:10:00", "b": 537.25}, {"a": "2024-11-10 17:15:00", "b": 531.6}, {"a": "2024-11-10 17:20:00", "b": 515.0}, {"a": "2024-11-10 17:25:00", "b": 504.25}, {"a": "2024-11-10 17:30:00", "b": 512.8}, {"a": "2024-11-10 17:35:00", "b": 521.0}, {"a": "2024-11-10 17:40:00", "b": 520.6}, {"a": "2024-11-10 17:45:00", "b": 526.8}, {"a": "2024-11-10 17:50:00", "b": 537.6}, {"a": "2024-11-10 17:55:00", "b": 544.0}, {"a": "2024-11-10 18:00:00", "b": 531.2}, {"a": "2024-11-10 18:05:00", "b": 534.0}, {"a": "2024-11-10 18:10:00", "b": 531.8}, {"a": "2024-11-10 18:15:00", "b": 528.2}, {"a": "2024-11-10 18:20:00", "b": 520.8}, {"a": "2024-11-10 18:25:00", "b": 517.5}, {"a": "2024-11-10 18:30:00", "b": 510.25}, {"a": "2024-11-10 18:35:00", "b": 506.0}, {"a": "2024-11-10 18:40:00", "b": 506.5}, {"a": "2024-11-10 18:45:00", "b": 508.0}, {"a": "2024-11-10 18:50:00", "b": 583.2}, {"a": "2024-11-10 18:55:00", "b": 607.6}, {"a": "2024-11-10 19:00:00", "b": 610.0}, {"a": "2024-11-10 19:05:00", "b": 621.0}, {"a": "2024-11-10 19:10:00", "b": 641.8}, {"a": "2024-11-10 19:15:00", "b": 649.8}, {"a": "2024-11-10 19:20:00", "b": 652.25}, {"a": "2024-11-10 19:25:00", "b": 664.0}, {"a": "2024-11-10 19:30:00", "b": 669.6}, {"a": "2024-11-10 19:35:00", "b": 668.4}, {"a": "2024-11-10 19:40:00", "b": 666.25}, {"a": "2024-11-10 19:45:00", "b": 661.6}, {"a": "2024-11-10 19:50:00", "b": 673.0}, {"a": "2024-11-10 19:55:00", "b": 682.4}, {"a": "2024-11-10 20:00:00", "b": 688.75}, {"a": "2024-11-10 20:05:00", "b": 678.2}, {"a": "2024-11-10 20:10:00", "b": 682.2}, {"a": "2024-11-10 20:15:00", "b": 671.0}, {"a": "2024-11-10 20:20:00", "b": 659.4}, {"a": "2024-11-10 20:25:00", "b": 674.2}, {"a": "2024-11-10 20:30:00", "b": 673.75}, {"a": "2024-11-10 20:35:00", "b": 660.8}, {"a": "2024-11-10 20:40:00", "b": 673.75}, {"a": "2024-11-10 20:45:00", "b": 673.6}, {"a": "2024-11-10 20:50:00", "b": 681.6}, {"a": "2024-11-10 20:55:00", "b": 692.3333333333334}, {"a": "2024-11-10 21:00:00", "b": 688.4}, {"a": "2024-11-10 21:05:00", "b": 684.6}, {"a": "2024-11-10 21:10:00", "b": 687.6}, {"a": "2024-11-10 21:15:00", "b": 694.0}, {"a": "2024-11-10 21:20:00", "b": 695.4}, {"a": "2024-11-10 21:25:00", "b": 699.25}, {"a": "2024-11-10 21:30:00", "b": 707.3333333333334}, {"a": "2024-11-10 21:35:00", "b": 702.4}, {"a": "2024-11-10 21:40:00", "b": 723.6}, {"a": "2024-11-10 21:45:00", "b": 724.3333333333334}, {"a": "2024-11-10 21:50:00", "b": 723.4}, {"a": "2024-11-10 21:55:00", "b": 728.3333333333334}, {"a": "2024-11-10 22:00:00", "b": 715.8}, {"a": "2024-11-10 22:05:00", "b": 715.2}, {"a": "2024-11-10 22:10:00", "b": 736.5}, {"a": "2024-11-10 22:15:00", "b": 726.0}, {"a": "2024-11-10 22:20:00", "b": 723.8}, {"a": "2024-11-10 22:25:00", "b": 735.5}, {"a": "2024-11-10 22:30:00", "b": 721.0}, {"a": "2024-11-10 22:35:00", "b": 703.0}, {"a": "2024-11-10 22:40:00", "b": 701.25}, {"a": "2024-11-10 22:45:00", "b": 692.6}, {"a": "2024-11-10 22:50:00", "b": 684.2}, {"a": "2024-11-10 22:55:00", "b": 680.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    